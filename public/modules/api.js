import { GITHUB_API_URL } from './consts.js';
import { GITHUB_USER_ENDPOINT } from './consts.js';
export async function acessarAPIGithub(user = "/"){
    const payload = await fetch(GITHUB_API_URL + user).then(response => response.json())
    return payload
}
export async function acessarMeuPerfil(){
    return acessarAPIGithub(GITHUB_USER_ENDPOINT)
}
export async function acessarMeusRepositorios(){
    const result = await acessarAPIGithub(GITHUB_USER_ENDPOINT + "/repos?sort=created&direction=desc&per_page=10")
    return result
}