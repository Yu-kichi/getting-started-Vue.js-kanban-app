import {mount} from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'
import { expect } from 'chai'

describe('KbnButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('kbn-buttonクラスを持つbutton要素で構成させること', () => {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })
    })
  })
})
