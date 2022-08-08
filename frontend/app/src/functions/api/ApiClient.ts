import axios, { AxiosResponse, AxiosError, Axios } from 'axios';
import { TechNoteContentStateProps } from '../../pages/TechNoteDetail.page';

type Account = {
    id: number,
    icon: string,
    name: string,
}

export type TechNoteContent = {
    id: string,
    expose: boolean,
    icon: number,
    tags: Array<string>,
    account: Account,
    created_at: string,
    title: string,
    data: {
        businessFlow: TechNoteContentStateProps,
        goal: TechNoteContentStateProps,
        problem: TechNoteContentStateProps,
        solution: TechNoteContentStateProps,
        result: TechNoteContentStateProps,
    }
}

class BaseApi{
    APIROOT = 'http://127.0.0.1:3001/';
    client: Axios;

    constructor(){
        this.client = axios.create(
            {
                timeout:5000
            }
        )
    }
}


class ApiClient extends BaseApi{
    private static instance: ApiClient;

    private constructor(){
        super();
    } 

    public static getInstance(){
        if(!this.instance){
            this.instance = new ApiClient();
        }

        return this.instance;
    }

    async getTechNoteList(){
        let result: Array<TechNoteContent> = [];

        await this.client.get(
            this.APIROOT + 'techNote',
            ).then((res:AxiosResponse<Array<TechNoteContent>>) => {
            result = res.data;
            return result;
        }).catch((error: AxiosError) => {
            console.log(error)
        })
        return result;
    }

    async getTechNote(id: string){
        let result: TechNoteContent | null = null;

        await this.client.get(
            this.APIROOT + 'techNote/' + id,
            ).then((res:AxiosResponse<TechNoteContent>) => {
            result = res.data;
            console.log(result)
            return result;
        }).catch((error: AxiosError) => {
            console.log(error)
        })
        return result;
    }

    async updateTechNote(id: string, body:TechNoteContent){
        await this.client.put(
            this.APIROOT + 'techNote/' + id,
            body
        ).then((res) => {
            console.log(res.data)
        })
    }

    async createEmptyTechNote(){
        await this.client.post(
            this.APIROOT + 'techNote/',
            {
                expose: true,
                icon: 0,
                tags: [],
                account: {
                    id: 1,
                    icon: '',
                    name: 'test user'
                },
                created_at: '2030-12-31',
                data: {
                    businessFlow: {
                        text: "",
                        reference: null,
                        flowChart: null,
                        table: null,
                        dataBar: null
                    },
                    goal: {
                        text: "",
                        reference: null,
                        flowChart: null,
                        table: null,
                        dataBar: null
                    },
                    problem: {
                        text: "",
                        reference: null,
                        flowChart: null,
                        table: null,
                        dataBar: null
                    },
                    solution: {
                        text: "",
                        reference: null,
                        flowChart: null,
                        table: null,
                        dataBar: null
                    },
                    result: {
                        text: "",
                        reference: null,
                        flowChart: null,
                        table: null,
                        dataBar: null
                    },
                }
            }
        ).then((res) => {
            console.log(res.data.json())
            return res.data.id;
        })
    }
}

export default ApiClient.getInstance();