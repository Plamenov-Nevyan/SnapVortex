import { ObjectId, Types } from "mongoose";
import PageSchema from "../models/Page";
import UserSchema from "../models/User";
import { Page } from "../types/Page";


export const createPage = async (pageData: Page, userId: unknown) => {
    let [isPageExisting, user] = await Promise.all([
        PageSchema.findOne({name: pageData.name}),
        UserSchema.findById(userId)
    ]) 

    if(!isPageExisting){
        pageData.owner = userId as Types.ObjectId
        let newPage = await PageSchema.create({
            ...pageData
        })
        user?.pagesOwned.push(newPage._id)
        await user?.save()
        return newPage
    }
}

export const getPageProfile = async (pageId:string) => {
    let page = await PageSchema.findById(pageId)
    return page
}