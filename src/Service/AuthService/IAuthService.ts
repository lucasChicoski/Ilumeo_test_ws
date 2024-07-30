

export interface IAuthService {
    login(user_code: string): Promise<any>
}