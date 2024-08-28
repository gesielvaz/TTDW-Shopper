export interface IUpdateImg {
    image?: string;
    customer_code?: string;
    measure_datetime?: Date;
    measure_type?: 'WATER' | 'GAS';
    has_confirmed?: boolean;
    image_url?: string;
  }
  
  export interface IUpdateImgCreate extends IUpdateImg {
    status_active: boolean;
    created_at: Date;
  }
  