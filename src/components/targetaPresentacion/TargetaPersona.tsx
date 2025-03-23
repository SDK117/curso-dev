interface Props {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  about: string;
}
export const TargetaPersona = ({name, age, gender, email, phone, address, about}: Props) => {
  return (
    <>
      <div>TargetaPersona</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{gender}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{about}</div>
    </>
  );
};
