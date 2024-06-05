

// src/app.controller.spec.ts
// src/app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MathService } from './math.service';

describe('AppController', () => {
let appController: AppController;
let mathService: MathService;

beforeEach(async () => {
const module: TestingModule = await Test.createTestingModule({
controllers: [AppController],
providers: [{provide: MathService,
useValue: {
add: jest.fn((a, b) => a + b),
multiply: jest.fn((a, b) => a * b),
},
},
],
}).compile();

appController = module.get<AppController>(AppController);

mathService = module.get<MathService>(MathService);
});

it('should return "Hello, NestJS!"', () => {
const result = appController.getHello();
expect(result).toBe('Hello, NestJS!');
});

it('should call MathService.add', () => {
appController.getHello();
expect(mathService.add).toHaveBeenCalledWith(2, 3);
});
});

/*

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MathService } from './math.service';

describe('AppController', () => {
let appController: AppController;

beforeEach(async () => {
const module: TestingModule = await Test.createTestingModule({
controllers: [AppController],providers: [MathService],
}).compile();
appController = module.get<AppController>(AppController);
});
it('should return "Hello, NestjJS!"', () => {
const result = appController.getHello();
expect(result).toBe('Hello, NestJS!');
});
});
*/
/*
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
*/