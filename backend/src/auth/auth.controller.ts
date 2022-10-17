import { Controller, Get, UseGuards } from '@nestjs/common';
import { KeycloakGuard } from './keycloak.guard';

@Controller('auth')
export class AuthController {

    @UseGuards(KeycloakGuard)
    @Get()
    getInfo(){
        return {text: 'You are logged In'};
    }
}
