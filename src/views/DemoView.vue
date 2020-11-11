<template>
  <div>
    <a-row :gutter='16'>
      <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 18 }'>
        <div class='gutter-box'>
          <a-card title='Demo Card'>
            <p>Card Content</p>
          </a-card>
        </div>
      </a-col>
      <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 6 }'>
        <div class='gutter-box'>
          <a-card>
            <a-button type='primary' block>Demo Button</a-button>
            <a-button type='link'>Cancel</a-button>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  Button,
  Card,
  Col,
  Row,
} from 'ant-design-vue'

export default {
  name: 'DemoView',
  components: {
    'a-button': Button,
    'a-card': Card,
    'a-col': Col,
    'a-row': Row,
  },
}
</script>
