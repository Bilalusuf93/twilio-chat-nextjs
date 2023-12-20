import { NextResponse } from "next/server";

const accountSid = process.env.ACCOUNT_SID;
const accountAuthToken = process.env.ACCOUNT_AUTH_TOKEN;
const fromNumber = process.env.ACCOUNT_TO_NUMBER;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const client = require('twilio')(accountSid, accountAuthToken);

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    console.log({ accountSid, accountAuthToken });
    const toNumber = searchParams.get("tonumber");
    const body = searchParams.get("body");
    const response =
        await client.messages
            .create({
                body: body,
                from: fromNumber,
                to: `+${toNumber}`
            });
    console.log({ response });

    return NextResponse.json({
        message: response,
    });
}
