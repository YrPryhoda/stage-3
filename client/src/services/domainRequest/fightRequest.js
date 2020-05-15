import { get, post } from "../requestHelper";

const entity = 'fights';

export const getlog = async () => {
    return await get(entity);
}

export const sendLog = async (body) => {
    return await post(entity, body);
} 