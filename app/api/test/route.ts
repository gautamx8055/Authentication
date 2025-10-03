import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { time, timeStamp } from "console";

export async function GET() { 
    try { 
        const client = await clientPromise;
        const db = client.db('saas-admin-panel');

        const result = await db.command({ping: 1});
        return NextResponse.json({
            message: "Database Connected Successfully",
            timeStamp: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json(
            {message: "Database Connection Failed", error}, 
            {status: 500}
        );
    }
}