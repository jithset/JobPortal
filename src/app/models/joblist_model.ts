export class JobListModel{
    constructor(
        public company_id:string,
        public job_title:string,
        public job_description:string,
        public job_post_date:Date,
        public job_last_date:Date,
        public job_skills:string[],
        public job_isactive:Boolean,
      ) {}
}

export interface UserModel {
    _id:string,
    email:string,
    token:string,
    password:string
}
