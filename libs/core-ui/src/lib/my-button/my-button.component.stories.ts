import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  title: 'MyButtonComponent',
  component: MyButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MyButtonComponent>;

const Template: Story<MyButtonComponent> = (args: MyButtonComponent) => ({
  component: MyButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    label:  '',
}