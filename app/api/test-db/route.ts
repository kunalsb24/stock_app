import { NextResponse } from "next/server";
import {connectToDatabase} from "@/database/mongoose"; // Update the path if needed

export async function GET() {
    try {
        await connectToDatabase();

        return NextResponse.json({
            success: true,
            message: "Successfully connected to MongoDB!"
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    }
}