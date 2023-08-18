import Cookies from 'js-cookie'

import { token } from '../../constants'

export const setToken = (jwtToken: string): void => {
    Cookies.set(token, jwtToken, {expires: 24})
}

export const getToken = (): string | null => {
    const jwtToken = Cookies.get(token)

    if(jwtToken !== undefined) {
        return jwtToken
    }
    return null

}

export const getJwtToken = (): string | null => {
    return getToken();
};