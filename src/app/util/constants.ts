export class Constants {
  public static readonly SLASH = '/';
  public static readonly DATE_FORMAT = 'dd/MM/yyyy HH:mm:ss'
  public static readonly SEARCH_FORM_COLLABORATOR = {
    ADDRESS: {
      NAME: 'address',
      VALUE: '',
      VALIDATORS: []
    },
    COMPANY: {
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    FIELD: {
      NAME: 'field',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly SEARCH_FORM_CUSTOMER = {
    NAME: {
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    PHONE: {
      NAME: 'phone',
      VALUE: '',
      VALIDATORS: []
    },
    ADDRESS: {
      NAME: 'address',
      VALUE: '',
      VALIDATORS: []
    },
    COLLABORATOR_ID: {
      NAME: 'collaboratorId',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly REQUEST_FORM = {
    NAME: {
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    MODEL_NAME: {
      NAME: 'modelName',
      VALUE: '',
      VALIDATORS: []
    },
    MANUFACTURER: {
      NAME: 'manufacturer',
      VALUE: '',
      VALIDATORS: []
    },
    TYPE: {
      NAME: 'type',
      VALUE: '',
      VALIDATORS: []
    },
    STATUS_DEVICE: {
      NAME: 'statusDevice',
      VALUE: '',
      VALIDATORS: []
    },
    ERROR_DESCRIPTION: {
      NAME: 'errorDescription',
      VALUE: '',
      VALIDATORS: []
    },
    FIX_DESCRIPTION: {
      NAME: 'fixDescription',
      VALUE: '',
      VALIDATORS: []
    },
    STATUS_REQUEST: {
      NAME: 'statusRequest',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_ACCEPT: {
      NAME: 'timeAccept',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_START: {
      NAME: 'timeStart',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_END: {
      NAME: 'timeEnd',
      VALUE: '',
      VALIDATORS: []
    },
    REQUEST_ID: {
      NAME: 'requestId',
      VALUE: '',
    },
    USER_ID: {
      NAME: 'userId',
      VALUE: '',
    },
    DEVICE_ID: {
      NAME: 'deviceId',
      VALUE: '',
    },
    EMPLOYEE_ID: {
      NAME: 'employeeId',
      VALUE: '',
    },
    COLLABORATOR_ID: {
      NAME: 'collaboratorId',
      VALUE: '',
    }
  }
  public static readonly EMPLOYEE_FORM = {
    NAME: {
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    PHONE: {
      NAME: 'phone',
      VALUE: '',
      VALIDATORS: []
    },
    STATUS: {
      NAME: 'status',
      VALUE: '',
      VALIDATORS: []
    },
    COLLABORATOR_ID: {
      NAME: 'collaboratorId',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly REGISTER_FORM = {
    NAME: {
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    PHONE: {
      NAME: 'phone',
      VALUE: '',
      VALIDATORS: []
    },
    ADDRESS: {
      NAME: 'address',
      VALUE: '',
      VALIDATORS: []
    },
    PASSWORD: {
      NAME: 'password',
      VALUE: '',
      VALIDATORS: []
    },
    USERNAME: {
      NAME: 'username',
      VALUE: '',
      VALIDATORS: []
    },
    FIELD: {
      NAME: 'field',
      VALUE: '',
      VALIDATORS: []
    }

}
  public static readonly STATUS_DEVICE = {
    OPEN: "Yêu cầu sửa chữa",
    DOING: "Đang sửa chữa",
    DONE: "Hoản thành sửa chữa"
  }

  public static readonly STATUS_REQUEST =
    {
      OPEN : "Đang chờ tiếp nhận",
      DOING : "Đang tiến hành",
      DONE : "Hoàn tất",
      DENY : "Từ chối tiếp nhận"
    }
  public static readonly TIME_SEARCH_FORM = {
    TIME_START: {
      NAME: 'timeStart',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_END: {
      NAME: 'timeEnd',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly USER_FORM = {
    NAME:{
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    PHONE:{
      NAME: 'phone',
      VALUE: '',
      VALIDATORS: []
    },
    EMAIL:{
      NAME: 'email',
      VALUE: '',
      VALIDATORS: []
    },
    ADDRESS: {
      NAME: 'address',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly COLLABORATOR_FORM = {
    COLLABORATOR_ID: {
      NAME: 'collaboratorId',
      VALUE: '',
      VALIDATORS: []
    },
    NAME:{
      NAME: 'name',
      VALUE: '',
      VALIDATORS: []
    },
    PHONE:{
      NAME: 'phone',
      VALUE: '',
      VALIDATORS: []
    },
    EMAIL:{
      NAME: 'email',
      VALUE: '',
      VALIDATORS: []
    },
    ADDRESS: {
      NAME: 'address',
      VALUE: '',
      VALIDATORS: []
    },
    IMAGE: {
      NAME: 'image',
      VALUE: '',
      VALIDATORS: []
    },
    FIELD: {
      NAME: 'field',
      VALUE: '',
      VALIDATORS: []
    },
    DESCRIPTION: {
      NAME: 'description',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_START: {
      NAME: 'timeStart',
      VALUE: '',
      VALIDATORS: []
    },
    TIME_END: {
      NAME: 'timeEnd',
      VALUE: '',
      VALIDATORS: []
    }
  }
  public static readonly USER_LOGIN = {
    USERNAME: {
      NAME: 'username',
      VALUE: '',
    },
    PASSWORD: {
      NAME: 'password',
      VALUE: '',
    }
  }
  public static readonly MONTH = [
    {label: "Tháng 1", value : 1},
    {label: "Tháng 2", value: 2},
    {label:"Tháng 3", value: 3},
    {label:"Tháng 4" , value: 4},
    {label:"Tháng 5" , value: 5},
    {label:"Tháng 6" , value: 6},
    {label:"Tháng 7" , value: 7},
    {label:"Tháng 8" , value: 8},
    {label:"Tháng 9" , value: 9},
    {label:"Tháng 10" , value: 10},
    {label:"Tháng 11" , value: 11},
    {label:"Tháng 12" , value: 12}
  ]
  public static readonly AREA = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bạc Liêu",
    "Bắc Kạn",
    "Bắc Giang",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Dương",
    "Bình Định",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Cần Thơ",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "TP. Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái"
  ];
  public static readonly FIELD = [
    "Smart Tivi",
    "Thiết bị gia dụng",
    "Camera",
    "Wifi",
    "Smart Light",
    "Thiết bị cảm biến",
    "Điện Thoại",
    "Ti vi"

  ];
  public static readonly TOAST = {
    SEVERITY: {
      SUCCESS: 'success',
      ERROR: 'error',
    }
  };

}
