import { ReactThreeFiber } from "@react-three/fiber";
import { PlaneGeometry, BufferGeometry, BufferAttribute, LineSegments, MeshBasicMaterial } from "three"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      planeGeometry: ReactThreeFiber.Node<PlaneGeometry, typeof PlaneGeometry>;
      bufferGeometry: ReactThreeFiber.Node<BufferGeometry, typeof BufferGeometry>;
      bufferAttribute: ReactThreeFiber.Node<BufferAttribute, typeof BufferAttribute>;
      lineSegments: ReactThreeFiber.Node<LineSegments, typeof LineSegments>;
      meshBasicMaterial: ReactThreeFiber.Node<MeshBasicMaterial, typeof MeshBasicMaterial>;
    }
  }
}
