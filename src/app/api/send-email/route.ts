import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/utils/mailer";

export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json();
        const { name, email, message } = reqBody;

        await sendEmail(name,email,message);
        return NextResponse.json({
            message: "Mail sent successfully",
            success : true
        }, { status : 200 })

    }catch (e: never) {
        console.log(e)
        return NextResponse.json({
            message : "Something went wrong in send-email"
        }, { status : 500});
    }

}
