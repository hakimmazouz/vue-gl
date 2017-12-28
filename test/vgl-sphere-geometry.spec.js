describe('VglSphereGeometry component', () => {
  const { VglSphereGeometry, VglNamespace } = VueGL
  const assert = chai.assert
  describe('Parameters of a instance should be same as the component properties.', () => {
    it('When properties are number.', () => {
      const vm = new Vue({
        template: `<vgl-namespace><vgl-sphere-geometry ref="geo" :radius="82.8" :widthSegments="31" :heightSegments="13" :phiStart="0.2" :phiLength="1.2" :thetaStart="0.3" :thetaLength="3.8" /></vgl-namespace>`,
        components: { VglSphereGeometry, VglNamespace }
      }).$mount()
      assert.strictEqual(vm.$refs.geo.inst.parameters.radius, 82.8)
      assert.strictEqual(vm.$refs.geo.inst.parameters.widthSegments, 31)
      assert.strictEqual(vm.$refs.geo.inst.parameters.heightSegments, 13)
      assert.strictEqual(vm.$refs.geo.inst.parameters.phiStart, 0.2)
      assert.strictEqual(vm.$refs.geo.inst.parameters.phiLength, 1.2)
      assert.strictEqual(vm.$refs.geo.inst.parameters.thetaStart, 0.3)
      assert.strictEqual(vm.$refs.geo.inst.parameters.thetaLength, 3.8)
    })
    it('When properties are string.', () => {
      const vm = new Vue({
        template: `<vgl-namespace><vgl-sphere-geometry ref="geo" radius="82.8" widthSegments="31" heightSegments="13" phiStart="0.2" phiLength="1.2" thetaStart="0.3" thetaLength="3.8" /></vgl-namespace>`,
        components: { VglSphereGeometry, VglNamespace }
      }).$mount()
      assert.strictEqual(vm.$refs.geo.inst.parameters.radius, 82.8)
      assert.strictEqual(vm.$refs.geo.inst.parameters.widthSegments, 31)
      assert.strictEqual(vm.$refs.geo.inst.parameters.heightSegments, 13)
      assert.strictEqual(vm.$refs.geo.inst.parameters.phiStart, 0.2)
      assert.strictEqual(vm.$refs.geo.inst.parameters.phiLength, 1.2)
      assert.strictEqual(vm.$refs.geo.inst.parameters.thetaStart, 0.3)
      assert.strictEqual(vm.$refs.geo.inst.parameters.thetaLength, 3.8)
    })
    it('When properties are undefined.', () => {
      const vm = new Vue({
        template: `<vgl-namespace><vgl-sphere-geometry ref="geo" /></vgl-namespace>`,
        components: { VglSphereGeometry, VglNamespace }
      }).$mount()
      assert.isUndefined(vm.$refs.geo.inst.parameters.radius)
      assert.isUndefined(vm.$refs.geo.inst.parameters.widthSegments)
      assert.isUndefined(vm.$refs.geo.inst.parameters.heightSegments)
      assert.isUndefined(vm.$refs.geo.inst.parameters.phiStart)
      assert.isUndefined(vm.$refs.geo.inst.parameters.phiLength)
      assert.isUndefined(vm.$refs.geo.inst.parameters.thetaStart)
      assert.isUndefined(vm.$refs.geo.inst.parameters.thetaLength)
    })
  })
  describe('Instance should be recreated when a property changed.', () => {
    it('When the width property changes.', (done) => {
      const vm = new Vue({
        template: `<vgl-namespace><vgl-sphere-geometry ref="geo" :radius="radius" /></vgl-namespace>`,
        components: { VglSphereGeometry, VglNamespace },
        data: { radius: 0.5 }
      }).$mount()
      const before = vm.$refs.geo.inst
      vm.radius = 1.03
      vm.$nextTick(() => {
        try {
          assert.notEqual(before, vm.$refs.geo.inst)
          done()
        } catch (e) {
          done(e)
        }
      })
    })
  })
})
