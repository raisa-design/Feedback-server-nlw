//Poderia ser utilizado  no nome do arquivo  -> submit-feedback-use-case.spec.ts ou seja
// poderia ser spec ou test.

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//     spies = espiões 

const createFeedbackSpy= jest.fn();
const sendMailSpy = jest.fn();

//Abaixo segue um exemplo de teste
// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)
// });

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)


describe('Submit feedback', () => {
    it('should de able to submit a feedback', async () => {
     
        await expect(submitFeedback.execute({ 
            type:'BUG',
            comment:'example comment',
            screenshot:'data:image/png;base64,fgshfshdfh',
        })).resolves.not.toThrow();
          

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });


    it('should not be able to submit a feedback without type', async () => {
      
        await expect(submitFeedback.execute({ 
            type:'',
            comment:'example comment',
            screenshot:'data:image/png;base64,fgshfshdfh',
        })).rejects.toThrow();
          
    });


    it('should not be able to submit a feedback without comment', async () => {
      
        await expect(submitFeedback.execute({ 
            type:'BUG',
            comment:'',
            screenshot:'data:image/png;base64,fgshfshdfh',
        })).rejects.toThrow();
          
    });


    it('should not be able to submit a feedback with an invalid screenshot', async () => {
      
        await expect(submitFeedback.execute({ 
            type:'BUG',
            comment:'Bugou geral',
            screenshot:'234',
        })).rejects.toThrow();
          
    });
});
//O describe cria uma swit de testes, como se tivesse criando uma categorização, ou seja, possuindo vários testes 
//para uma funcionalidade