"use client";

import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

interface IAuthWrapper {
  children: React.ReactNode;
}

// 페이지에 접근할 권한이 있는자인지 판단하는 Wrapper
const AuthWrapper = ({ children }: IAuthWrapper) => {
  const { push } = useRouter();

  // 화면이 유저에게 보여지기 전에 동기적으로 처리하면 좋은 코드라고 판단하여 useLayoutEffect 사용
  useLayoutEffect(() => {
    // Bio에서 접근할때 비밀번호를 걸어버리면 해당 페이지에 url로 접근했을 때는 방어할 방법이 없음.
    // url은 코드볼줄 아는 사람이면 /post/create가 경로임을 알수 있기에 해당 페이지에 접근했을 때 방어하는 수단이 필요함.
    // 따라서 해당 페이지에 접근했을 때 비밀번호를 걸어버려서 틀리면 "/"으로 돌려보낸다.
    const passwordToHiddenPage = prompt(
      "해당 페이지에 접근할 수 있는 패스워드를 입력해주세요. 힌트) 사번"
    );
    if (passwordToHiddenPage !== process.env.NEXT_PUBLIC_CREATE_POST_PASSWORD) {
      push("/");
      return;
    }
  }, []);
  return <>{children}</>;
};

export default AuthWrapper;
