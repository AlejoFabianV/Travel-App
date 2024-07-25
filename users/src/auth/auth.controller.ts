import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    signIn(@Body() signInDTO: Record<string, any>) {
        return this.authService.signIn(signInDTO.username, signInDTO.password);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getPofile(@Request() req) {
        return req.user;
    }
}
