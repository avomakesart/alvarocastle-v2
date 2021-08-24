import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '.';
import { ProjectUpdoot } from './ProjectUpdoot';
@ObjectType()
@Entity()
export class Projects extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  headline!: string;

  @Field()
  @Column()
  headlineImage!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  featuredImage!: string;

  @Field()
  @Column()
  category!: string;

  @Field()
  @Column()
  techStack!: string;

  @Field()
  @Column()
  deliverables!: string;

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.projects)
  creator: User;

  @OneToMany(() => ProjectUpdoot, (updoot) => updoot.project)
  projectUpdoots: ProjectUpdoot[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
