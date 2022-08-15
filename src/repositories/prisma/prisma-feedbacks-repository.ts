import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
   async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot,
            }
    
            //Poderia usar da maneira abaixo, mas a de cima fica mais clara e mais organizada.
        //  data:{
        //     type:req.body.type,
        //     comment:req.body.comment,
        //     screenshot:req.body.screenshot,
        //  }   
        })
    
    }
}
//Comentário: Toda função Async vira uma promise