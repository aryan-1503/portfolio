import nodemailer from "nodemailer"
import {NextResponse} from "next/server";

export const sendEmail = async (name : string, email : string, message : string)  => {
    try {
        // Transporter for handling mails
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: true
            }
        });


        const mailOptions = {
            from: email,
            to: process.env.MAIL_USER,
            subject: `Message from ${name}`,
            text: message
        };

        // Sends email
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                return NextResponse.json({ success : false , message : error} , { status : 500})
            } else {
                NextResponse.json({
                    success : true,
                    message : info.response} ,
            { status : 201 })
            }
        });

    }catch (e: unknown) {
        console.log("Error in sending mail : ",e)

    }
}