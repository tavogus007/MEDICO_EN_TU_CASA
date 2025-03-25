import { 
    IsInt, IsNotEmpty, IsOptional, 
    IsIn, Min 
  } from 'class-validator';
  
  export class CreateDistritoDto {
    @IsInt()
    @Min(1)
    distNro: number;
  
    @IsOptional()
    @IsIn(['A', 'I'], { message: 'El estado debe ser A (Activo) o I (Inactivo)' })
    distEstado?: string;
  
    @IsNotEmpty()
    @IsInt()
    macroId: number; // ID del Macrodistrito relacionado
  }