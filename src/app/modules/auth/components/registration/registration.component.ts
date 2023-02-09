import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { UserModel } from '../../models/user.model';
import { first } from 'rxjs/operators';
import { MatStepper } from '@angular/material/stepper';
import { SelectorOptionsConfigI } from 'src/app/common/components/selector-option/selector-option.component';

const TABS_CONFIG = [
  { widthCell: '33%', title: 'Cuenta', iconName: 'fa-regular fa-heart', colorIcon: '#fff', disabled: true },
  { widthCell: '33%', title: 'Empresa', iconName: 'fa-solid fa-user-group', colorIcon: '#fff', disabled: true },
  { widthCell: '34%', title: 'Bono', iconName: 'fa-solid fa-star', colorIcon: '#fff', disabled: true }
]

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  name = 'Angular';


  @ViewChild('stepper') stepperControl: MatStepper;
  @ViewChild('stepperBonus') stepperBonusControl: MatStepper;
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;
  codeVal = 0;
  errorMsj = '';
  toogleP = true;
  toogleCP = true;
  selectedAnswer = 0;
  totalPercent = 0;
  questionList = QUESTIONS_LIST;
  blumerCount = 0;

  selectorOptionsConfig: SelectorOptionsConfigI[] = [
    {
      id: 'phoneId',
      value: 1,
      backgroundColor: 'white',
      widthCell: '50%',
      title: 'Celular',
      iconName: 'fa fa-phone',
      colorIcon: 'black',
      disabled: false,
      checked: true
    },
    {
      id: 'phoneEnvelope',
      value: 2,
      backgroundColor: 'white',
      widthCell: '50%',
      title: 'Email',
      iconName: 'fa fa-envelope',
      colorIcon: 'black',
      disabled: false,
      checked: false
    }
  ];

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  tabsConfig = TABS_CONFIG;
  selectedTab = 1;
  selectedTabSecondStep = 1;
  toogleActionBtnCel = true;
  toogleActionBtnEmail = true;

  get celularCtrl(): AbstractControl {
    return this.registrationForm.controls['celular'];
  }

  get emailCtrl(): AbstractControl {
    return this.registrationForm.controls['email'];
  }

  get fullnameCtrl(): AbstractControl {
    return this.registrationForm.controls['fullname'];
  }

  get usuarioCtrl(): AbstractControl {
    return this.registrationForm.controls['usuario'];
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  get valObj() {
    return Validators;
  }

  initForm(): void {
    this.registrationForm = this.fb.group(
      {
        fullname: [
          null,
          this.valObj.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]),
        ],
        usuario: [
          null,
          this.valObj.compose([Validators.required])
        ],
        email: [
          null,
          this.valObj.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320)
          ]),
        ],
        celular: [
          null,
          this.valObj.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ],
        password: [
          null,
          this.valObj.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]),
        ],
        cPassword: [
          null,
          this.valObj.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]),
        ],
        cargo: [
          null,
          this.valObj.compose([Validators.required])
        ],
        categoria: [
          '1',
          this.valObj.compose([Validators.required])
        ],
        agree: [false, this.valObj.compose([Validators.required])]
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword
      }
    );
  }

  submit() {
    this.hasError = false;
    const result: {
      [key: string]: string;
    } = {};
    Object.keys(this.f).forEach((key) => {
      result[key] = this.f[key].value;
    });
    const newUser = new UserModel();
    newUser.setUser(result);
    const registrationSubscr = this.authService
      .registration(newUser)
      .pipe(first())
      .subscribe((user: UserModel) => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(registrationSubscr);
  }

  switchTab(event: { numberTab: number }): void {

    if (event && this.registrationForm.valid) {
        this.selectedTab = event.numberTab;
    }
  }

  switchTabSecondStep(event: { value: number }): void {
    if (event) {
        this.selectedTabSecondStep = event.value;
    }
  }

  nextStep(stepperId: number): void {
    switch (stepperId) {
      case EnumTabs.CUENTA:
        if (this.registrationForm.valid) {
          this.stepperControl.next();
          this.celularCtrl.patchValue(this.celularCtrl.value);
          this.emailCtrl.patchValue(this.emailCtrl.value);
          this.celularCtrl.disable();
          this.emailCtrl.disable();
        }
        break;
      case EnumTabs.BONUS:
        this.stepperBonusControl.next();
        break;
      default:
        break;
    }
  }

  previousStep(): void {
    this.stepperControl.previous();
    this.celularCtrl.patchValue(this.celularCtrl.value);
    this.emailCtrl.patchValue(this.emailCtrl.value);
    this.emailCtrl.enable();
    this.celularCtrl.enable();
  }

  validatorClass(nameControl: string): boolean {
    return this.registrationForm.controls[nameControl].valid;
  }

  changeValueSelect(): void {
    const SELECT_VALUE = this.registrationForm.get('cargo')?.value;
    if (SELECT_VALUE === 'null') {
      this.registrationForm.get('cargo')?.patchValue(JSON.parse(SELECT_VALUE))
    }
  }

  editBtn(nameCtrl: string, toogleAction = false): void {
    if (toogleAction && this.registrationForm.controls[nameCtrl].valid) {
      this.editButtonInput(nameCtrl, toogleAction);
      this.registrationForm.controls[nameCtrl].disable();
    } else {
      this.editButtonInput(nameCtrl, toogleAction);
      this.registrationForm.controls[nameCtrl].enable();
    }
  }

  private editButtonInput(nameCtrl: string, toogleAction: boolean): void {
    switch (nameCtrl) {
      case RegistrationEnum.EMAIL:
        this.toogleActionBtnEmail = toogleAction;
        break;
      case RegistrationEnum.CELULAR:
        this.toogleActionBtnCel = toogleAction;
        break;
      default:
        break;
    }
  }

  codeValidation(event: any): void {
    if (isNaN(event.code)) {
      this.errorMsj = 'Codigo no es numerico';
    } else {
      this.codeVal = event.code;
    }
  }

  resendCode(event: any) {
    if (event) {
      alert('Reenviar codigo');
    }
  }

  validateCode(): void {
    if (Number(this.codeVal) === 123456) {
      this.errorMsj = '';
      this.selectedTab = 2;
    } else {
      this.errorMsj = 'Codigo inválido';
    }
    this.codeVal = 0;
  }

  goBonus(): void {
    this.selectedTab = 3;
  }

  sendForm(): void {
    const DATA_FORM = this.registrationForm.getRawValue();
    console.log('SEND FORM: ', DATA_FORM);
    this.goBonus();
  }

  sendAnswer(item: { answer: any }, index: number): void {
    this.selectedAnswer++;
    const PERCENT_PARTS = 100 / this.questionList.length;

    this.totalPercent += PERCENT_PARTS;
    this.blumerCount += 10;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

export class RegistrationEnum {
  public static EMAIL = 'email';
  public static CELULAR = 'celular';
}

export enum EnumTabs {
  CUENTA  = 1,
  BONUS
}

const QUESTIONS_LIST = [
  {
    idQ: 1,
    question: 'Cuanto tiempo tiene su empresa',
    answers: [
      { answer: '1 año' },
      { answer: '2 año' },
      { answer: '3 año' },
      { answer: '4 año' }
    ]
  },
  {
    idQ: 2,
    question: 'Cuantos empleados tiene su empresa',
    answers: [
      { answer: '10' },
      { answer: '20' },
      { answer: '30' },
      { answer: '40' }
    ]
  },
  {
    idQ: 3,
    question: 'Cuanto en que ciudad esta tu empresa',
    answers: [
      { answer: 'Ciudad 1' },
      { answer: 'Ciudad 2' },
      { answer: 'Ciudad 3' },
      { answer: 'Ciudad 4' }
    ]
  }
]
