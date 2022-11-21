import React from "react";
import {useRouter} from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/courses');
    }, 3000)
  }, [])

  return (
    <div>
      <h2>Page not found. pls check url</h2>
    </div>
  )
}

export default NotFound
