export interface IRegister {
    customer_code: string;
    measure_datetime: string;
    measure_type: 'WATER' | 'GAS';
    has_confirmed: boolean;
    image: string;
  }

  export interface IRegisterCreate extends IRegister {
    status_active: boolean;
    created_at: Date;
  }
