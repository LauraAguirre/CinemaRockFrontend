import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from './../../environments/environment';
import { UserService } from './user.service';

describe('UserService', () => {
	let service: UserService;
	let httpTestingController: HttpTestingController;
	const email: string = 'dario@gmail.com';
	const password: string = 'Prueba123';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: 
			[
				{
					provide: environment,
					useValue: {},
				},
			],
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(UserService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call user service login', () => {
		let user = 
		{
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
		};
		service.login(email, password).subscribe((response) => {
			expect(response).toEqual(user);
		});
		const urlUser = environment.ApiUrl + '/user';
		const req = httpTestingController.expectOne(urlUser + '/autenticar' , email + password);
		expect(req.request.method).toEqual('POST');
		req.flush(user);
	});

	it('should call user service register', () => {
		const user = 
		{
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
		};
		service.register(user).subscribe((response) => {
			expect(response).toEqual(user);
		});
		const urlUser = environment.ApiUrl + '/user';
		const req = httpTestingController.expectOne(urlUser + '/save');
		expect(req.request.method).toEqual('POST');
	});

	it('should call user service update', () => {
		const user = 
		{
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
		};
		service.update(user).subscribe((response) => {
			expect(response).toEqual(user);
		});
		const urlUser = environment.ApiUrl + '/user';
		const req = httpTestingController.expectOne(urlUser + '/actualizar-usuario');
		expect(req.request.method).toEqual('POST');
	});


});
