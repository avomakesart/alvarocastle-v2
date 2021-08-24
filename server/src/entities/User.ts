import { Field, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { Post, Updoot } from '.';
import { Projects } from './Projects';
import { ProjectUpdoot } from './ProjectUpdoot';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  username!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column({ default: 'User' })
  role!: string;

  @Field()
  @Column({ type: 'text' })
  pictureUrl: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  bio: string | null;

  // @OneToMany(() => Post, (post) => post.creator)
  // posts: Post[];

  @OneToMany(() => Projects, (user) => user.creator)
  projects: Projects[];

  // @OneToMany(() => Updoot, (updoot) => updoot.user)
  // updoots: Updoot[];

  @OneToMany(() => ProjectUpdoot, (projectUpdoot) => projectUpdoot.user)
  projectUpdoot: ProjectUpdoot[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
