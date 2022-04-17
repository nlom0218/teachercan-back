import jwt from "jsonwebtoken";
import User from "../../models/user";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) return { ok: false, error: "사용자를 찾을 수 없습니다." };

      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) return { ok: false, error: "비밀번호가 틀립니다." };

      // DB에 인증코드 값이 있는 경우 null로 수정
      await User.updateOne({ email }, { certificate: null });

      const token = await jwt.sign({ email: user.email }, process.env.SECRET_KEY);
      return { ok: true, token };
    },
  },
};
