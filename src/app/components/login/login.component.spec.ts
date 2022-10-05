import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { LoginComponent } from './login.component';

const userResponse ={
  ok: true,
  msg: "Usuario encontrado",
  user: {
    address: "",
    birthday: "",
    code: "USR",
    email: "dario@gmail.com",
    genre: "",
    id: "-N2y-3O0iRiaITMI04aS",
    idRole: "",
    lastName: "Gomez",
    login: "Mintic",
    name: "Mintic",
    password: "827ccb0eea8a706c4c34a16891f84e7b",
    phone: "2222222"
  }
}

let fb = new FormBuilder();
let userProfileForm = fb.group({
  email: [''],
  password: ['']
});

const userServiceMock = {
  login: jest.fn(),
  register: jest.fn(),
  update: jest.fn()
};

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: UserService, useValue: { movies: jest.fn(() => of({})) } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
        { provide: Router, useValue: { navigate: ()=>{} } },
      ],
      imports: 
      [
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call userOn', () => {
    jest.spyOn(localStorage, "getItem").mockName("userOn").mockReturnValue('true')
    component.userOn();
  });

  it('should run login of userService in login', async () => {
    const spy = jest.spyOn(component, 'login');
    component.submitted = true;
    component.userProfileForm = userProfileForm;
    component.userProfileForm.get('email')?.setValue('dario@gmail.com');
    component.userProfileForm.get('password')?.setValue('12345');
    const spyUserService = jest.spyOn(userServiceMock, 'login').mockReturnValue(of(userResponse));
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
          getPropertyValue: (prop) => {
              return '';
          }
      })
    });
    await expect(spyUserService).toBeUndefined();
    expect(spy).toBeCalled();
  });

})