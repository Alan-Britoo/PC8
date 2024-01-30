import { useCatImage } from "../hooks/useCatImge";

export function Otro() {
  const { imageUrl } = useCatImage({ fact: "cat" });

  return <>{imageUrl && <img src={imageUrl} />}</>;
}
