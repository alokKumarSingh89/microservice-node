import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
export class RtStrategy extends PassportStrategy(Strategy) {}
