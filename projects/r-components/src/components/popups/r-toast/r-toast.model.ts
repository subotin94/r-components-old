export interface  RTiastConfig {
  duration: number;
  hasIcon: boolean;
  
}

export interface RToast {
  title: string;
  message: string;
  // TODO create RToastConfig
  config: any;
}
