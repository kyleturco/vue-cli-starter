<template>
  <div>
    <a-row :gutter='16'>
      <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 18 }'>
        <div class='gutter-box'>
          <a-card :loading='isLoading' title='Demo Card'>
            <div class='card-breadcrumb-container'>
              <a-breadcrumb>
                <a-breadcrumb-item><a href="#">Transcript</a></a-breadcrumb-item>
                <a-breadcrumb-item>Add a Record</a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <a-row :gutter='16'>
              <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 6 }'>
                <h3>Section 1</h3>
              </a-col>
              <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 18 }'>
                <div class='mb-4'>
                  <div class="data-label">Input 1</div>
                  <a-input placeholder='Enter text' />
                </div>
                <div class='mb-4'>
                  <div class="data-label">Input 2</div>
                  <a-input placeholder='Enter text' />
                </div>
                <div>
                  <div class="data-label">Input 2</div>
                  <a-input placeholder='Enter text' />
                </div>
              </a-col>
            </a-row>
            <hr />
            <a-row :gutter='16'>
              <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 6 }'>
                <h3>Section 2</h3>
                <p>Subheader text goes here.</p>
              </a-col>
              <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 18 }'>
                <div class='mb-4'>
                  <div class="data-label">Input 1</div>
                  <a-input placeholder='Enter text' />
                </div>
                <div class='mb-4'>
                  <div class="data-label">Input 2</div>
                  <a-input placeholder='Enter text' />
                </div>
                <div>
                  <div class="data-label">Input 2</div>
                  <a-input placeholder='Enter text' />
                </div>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </a-col>
      <a-col class='gutter-row' :xs='{ span: 24 }' :lg='{ span: 6 }'>
        <div class='gutter-box'>
          <a-card>
            <a-button class='transparent mb-4' type='primary' block>Demo Button</a-button>
            <a-button class='mx-auto' type='link'>Cancel</a-button>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Input,
  Row,
} from 'ant-design-vue'

export default {
  name: 'DemoView',
  components: {
    'a-breadcrumb': Breadcrumb,
    'a-breadcrumb-item': Breadcrumb.Item,
    'a-button': Button,
    'a-card': Card,
    'a-col': Col,
    'a-input': Input,
    'a-row': Row,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => { this.isLoading = false }, 750)
  },
}
</script>
