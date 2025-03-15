import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {

                return this.login({ email, password });
                //call another method

            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error;
        }

    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createEmailSession(email, password);
            return userAccount;
        }
        catch (error) {
            throw error;
        }
    }
    async getCurrrentUser() {
        try {
            const user = await this.account.get();
            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const response = await this.account.deleteSession("current");
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
const authServiceInstance = new AuthService();
export default authServiceInstance;












