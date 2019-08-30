/*
private int tid;
	private int fromacc;
	private int toacc;
	private long frombal;
	private long tobal;
	private int flag;
	private long amount;
	private String date;
	private Timestamp ts;
*/

export class Transactions{
    constructor(public fromacc: number,
        public toacc: number, 
        public frombal: number, 
        public tobal:number,
        public flag: number,
        public amount: number,
        public date: String,
        public ts: string){

        }
}