import VglObject3d from './vgl-object3d.js'
import { assetFactory } from './mixins.js'
import { parseVector3, parseSpherical, update } from './utils.js'
import { Camera, Vector3, Spherical } from './three.js'

function setPositionAndRotation (vm, orbitPosition, orbitTarget) {
  if (orbitPosition || orbitTarget) {
    const target = parseVector3(orbitTarget)
    if (orbitPosition) {
      const position = vm.inst.position.setFromSpherical(parseSpherical(orbitPosition))
      if (target) position.add(target)
    }
    vm.inst.lookAt(target || new Vector3())
    update(vm)
  }
}

export default {
  mixins: [VglObject3d, assetFactory(Camera, 'vglCameras')],
  props: {
    orbitTarget: [String, Vector3],
    orbitPosition: [String, Spherical]
  },
  watch: {
    orbitTarget: {
      handler (target) {
        setPositionAndRotation(this, this.orbitPosition, target)
      },
      immediate: true
    },
    orbitPosition (position) {
      setPositionAndRotation(this, position, this.orbitTarget)
    }
  }
}
