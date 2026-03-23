import { currentUserRole } from "@/module/auth/action";
import { currentUser } from "@clerk/nextjs/dist/types/server";

//POST request = “send data to the server to create or process something.”
export async function POST(request){
    try{ 
        //get all the field from the clientside
        //basic validation basically entry that we needed
        //run a loop for each language and each language have suitable no of test cases
        //where we get judge0 language id from the currentlanguge
//prepare judge0 submission for all the testcase
//submit all the testcase in one batch
//extract token from rrsponses
const userRole =await currentUserRole()
    const user=await currentUser()
    if()

    }catch(error){
        
    }
}