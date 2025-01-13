import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNumber, IsString, Length, Max, Min, IsAlphanumeric } from 'class-validator';
import { Role } from 'src/common/types/user-types.enum';

@Schema({ timestamps: true })
export class User {
  @IsString()
  @Length(12)
  @Prop({ required: true })
  name: string;

  @IsEmail()
  @Prop({ unique: true })
  email: string;

  @IsString()
  @IsAlphanumeric()
  @Length(8)
  @Prop({ required: true })
  password: string;

  @Prop({
    type: String,
    enum: Role,
    default: Role.User,
  })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
