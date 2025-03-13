import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppAuthService } from '../../services/auth.service'
import { AuthDto } from '../../dtos/auth.dto';


@Controller('autenticacion')
export class AuthController {

    constructor(private readonly appAuthService: AppAuthService) { }

  @Post('/login')
  async funcionAutenticar(@Body() data: any, @Res() res: Response) {
    /*data.status(500).redirect('/login');
    return this.appAuthService.login(data);*/
    //const result = await this.appAuthService.login(data);

    // Verificar si la autenticación fue exitosa
    const result = await this.appAuthService.login(data);

    // Verificar si la autenticación fue exitosa
    if (result) {
      return res.status(HttpStatus.OK).json({
        message: 'Login successful',
        data: result, // Puedes enviar tokens o datos de sesión aquí
        token: '123456789',
        status: 200
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid username or password',
      });
    }
  }

}
