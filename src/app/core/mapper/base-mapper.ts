import { Injectable } from '@angular/core';
import { ClassConstructor, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class Mapper {
  fromJson<T>(classType: ClassConstructor<T>, fromObject: any): T {
    const mapped = plainToClass(classType, fromObject, {
      strategy: 'exposeAll',
      excludeExtraneousValues: true,
    });
    return mapped;
  }

  fromListJson<T>(classType: ClassConstructor<T>, fromObject: any[]): T[] {
    const mapped = plainToClass(classType, fromObject, {
      strategy: 'exposeAll',
      excludeExtraneousValues: true,
    });
    return mapped;
  }
}
