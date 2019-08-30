export class CustomerRequest {
    constructor(public uid: number,
        public username: String, 
        public password: String, 
        public name: String, 
        public address: String, 
        public email: String, 
        public phoneNo: String, 
        public occupation: String){}
}
