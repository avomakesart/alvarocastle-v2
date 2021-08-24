import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Projects, User } from '.';

// m to n
// many to many
// user <-> posts
// user -> join table <- posts
// user -> updoot <- posts

@Entity()
export class ProjectUpdoot extends BaseEntity {
  @Column({ type: 'int' })
  value: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.projectUpdoot)
  user: User;

  @PrimaryColumn()
  projectId: number;

  @ManyToOne(() => Projects, (project) => project.projectUpdoots, {
    onDelete: 'CASCADE',
  })
  project: Projects;
}
