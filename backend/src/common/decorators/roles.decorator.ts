
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/common/types/user-types.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
