import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Color, RandomHelper, User } from '@core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input()
  public readonly user!: User;

  @Input()
  public avatarBackgroundColor!: Color;

  @Input()
  public readonly sizeInPx = 50;

  @Input()
  public readonly textSizeInPx = 22;

  @Input()
  public readonly borderRadiusInPercents = 50;

  public get size(): string {
    return `${this.sizeInPx}px`;
  }

  public get textSize(): string {
    return `${this.textSizeInPx}px`;
  }

  public get borderRadius(): string {
    return `${this.borderRadiusInPercents}%`;
  }

  public get userFirstLetterOfName(): string {
    return this.user.name
      .slice(0, 1)
      .toUpperCase();
  }

  public get backgroundColor(): string {
    const { r, g, b } = this.avatarBackgroundColor;

    return `rgb(${r}, ${g}, ${b})`;
  }

  // private technicalBackgroundColor!: Color;

  constructor(
    private readonly randomHelper: RandomHelper
  ) { }

  public ngOnInit(): void {
    if (!this.avatarBackgroundColor) {
      this.generateAvatarBackgroundColor();
    }
  }

  private generateAvatarBackgroundColor(): void {
    const minRangeValue = 25;
    const maxRangeValue = 150;

    this.avatarBackgroundColor = {
      r: this.randomHelper.generateInt(minRangeValue, maxRangeValue),
      g: this.randomHelper.generateInt(minRangeValue, maxRangeValue),
      b: this.randomHelper.generateInt(minRangeValue, maxRangeValue)
    };
  }
}
