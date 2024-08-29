export interface IRegister {
    image?: string;
    customer_code?: string;
    measure_datetime?: Date;
    measure_type?: 'WATER' | 'GAS';
    has_confirmed?: boolean;
    image_url?: string;
  }

  export interface IRegisterCreate extends IRegister {
    status_active: boolean;
    created_at: Date;
  }
