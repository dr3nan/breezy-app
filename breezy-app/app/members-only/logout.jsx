'use client'

import React from "react";

import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Logout() {
  return <a href="/api/auth/logout"><Button>LOGOUT</Button></a>;
}