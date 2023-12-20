import { NextResponse } from "next/server";

const accountSid = process.env.ACCOUNT_SID;
const accountAuthToken = process.env.ACCOUNT_AUTH_TOKEN;
const toNumber = process.env.ACCOUNT_TO_NUMBER;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const client = require('twilio')(accountSid, accountAuthToken);

export async function GET(request: Request) {
    client.messages
        .create({
            body: 'This will be the body of the new message!',
            from: toNumber,
            to: '+15558675310'
        })
        .then((message: any) => {
            return NextResponse.json({
                message: message,
            });
        });


}
