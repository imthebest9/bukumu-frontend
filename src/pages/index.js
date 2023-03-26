import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import Books from "@/components/books";

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <Books />
        </div>
      </div>
    </>
  );
}
