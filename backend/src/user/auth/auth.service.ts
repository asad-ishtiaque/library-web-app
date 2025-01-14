import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as argon2 from 'argon2';
import { User } from '../user.model';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwt: JwtService,
  ) {}

  async signUp(data: SignUpDto) {
    const existingUser = await this.userModel.findOne({ email: data.email });

    if (existingUser)
      throw new BadRequestException('This email is already in use');

    const user = new this.userModel(data);

    user.password = await argon2.hash(user.password);

    await user.save();

    return {
      success: true,
    };
  }

  async signIn({ email, password }: SignInDto) {
    const user = await this.userModel.findOne({ email });

    if (!user) throw new NotFoundException('Invalid email or password');

    const isValidPassword = await argon2.verify(user.password, password);

    if (!isValidPassword)
      throw new NotFoundException('Invalid email or password');

    const payload = {
      email,
      id: user.id,
      name: user.name,
      role: user.role,
    };

    return {
      accessToken: this.jwt.sign(payload),
    };
  }
}
